import type { NextApiRequest, NextApiResponse } from "next";
import { pusherServerClient } from "../../../server/pusher";

export default function pusherAuthEndpoint(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { socket_id } = req.body;
  const { user_id, nickname } = req.headers;

  if (!user_id || typeof user_id !== "string") {
    res.status(404).send("no user");
    return;
  }

  const auth = pusherServerClient.authenticateUser(socket_id, {
    id: user_id,
    user_info: {
      name: nickname,
    },
  });

  res.send(auth);
}
