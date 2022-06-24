import React from 'react';
import { useActionData, Form, useTransition, Link } from '@remix-run/react';
import { createRoom } from '../../server/db';
import { redirect } from '@remix-run/node';

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
