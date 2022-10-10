import React from 'react';
import { useActionData, Form, useTransition, Link } from '@remix-run/react';
import { createRoom } from '../../server/db';
import { redirect } from '@remix-run/node';
import { commitSession, getSession } from '../sessions';
import ValidationMessage from '~/components/ValidationMessage/ValidationMessage';

export async function loader({ request }) {
  const session = await getSession(request.headers.get('Cookie'));
  console.log(session.has('__session'));
  if (session.has('__session')) {
    console.log('Isnndie UserId');
    // Redirect to the home page if they are already signed in.
    return redirect('/rooms');
  }

  return null;
}

export async function action({ request }) {
  const body = await request.formData();
  let name = body.get('name');
  const draw = await createRoom(name);
  const session = await getSession(request.headers.get('Cookie'));
  // if (errors) {
  //   const values = Object.fromEntries(formData);
  //   return json({ errors, values });
  // }
  session.set('userId', draw.userId);

  console.log(draw);
  return redirect(`/draw/${draw.id}`, {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
}

export default function Index() {
  const transition = useTransition();
  const actionData = useActionData();

  return (
    <Form method='post'>
      <fieldset disabled={transition.state === 'submitting'}>
        <p>
          <label>
            Name:{' '}
            <input
              name='name'
              type='text'
              defaultValue={actionData ? actionData.values.name : undefined}
              style={{
                borderColor: actionData?.errors.name ? 'red' : '',
              }}
            />
          </label>
        </p>

        {actionData?.errors.name ? (
          <ValidationMessage
            isSubmitting={transition.state === 'submitting'}
            error={actionData?.errors?.name}
          />
        ) : null}

        <p>
          <button type='submit'>
            {transition.state === 'submitting'
              ? 'Configuring...'
              : 'Enter Room'}
          </button>
        </p>

        <Link to='/draw/freedraw' className='text-xl text-blue-600 underline'>
          Try without Login
        </Link>
      </fieldset>
    </Form>
  );
}
