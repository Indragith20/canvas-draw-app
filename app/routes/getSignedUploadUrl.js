import { json } from "@remix-run/node";
import { getSignedUrl } from '../../server/fileUploadHandler';
import { requireAuth } from '../../server/auth';

export async function loader({ request }) {
  const { uid } = await requireAuth(request);

  let { searchParams } = new URL(request.url);

  let filePath = searchParams.get('filePath');

  let action = searchParams.get('action');

  let url = await getSignedUrl(filePath, action);

  return json({ url });

}