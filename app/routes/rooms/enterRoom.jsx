import React from 'react';
import { useActionData, Form, useTransition, Link } from '@remix-run/react';
import { createRoom } from '../../../server/db';
import { redirect } from '@remix-run/node';

export async function loader({ request }) {
  const session = await getSession(request.headers.get('cookie'));
  const { uid } = await checkSessionCookie(session);
}

export async function action({ request }) {
  const body = await request.formData();
  let name = body.get('name');
  const draw = await createRoom(name);
  // if (errors) {
  //   const values = Object.fromEntries(formData);
  //   return json({ errors, values });
  // }
  console.log(draw);
  return redirect(`/draw/${draw.id}`);
}

export default function EnterRoom() {
  const transition = useTransition();
  const actionData = useActionData();

  // useSubmit(new FormmData())

  return (
    <Form method='post'>
      <fieldset disabled={transition.state === 'submitting'}>
        <p>
          <label>
            Room Name:{' '}
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
