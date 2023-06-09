import { dbConnection } from '@/lib/connection'
import { createUser, loginUser, updateUser } from '@/lib/controllers/userController'

import { TOKEN_HEADER } from '@/consts'

import type { NextApiRequest, NextApiResponse } from 'next'

dbConnection()

export default async function usersApi(req: NextApiRequest, res: NextApiResponse) {
	const { body, method } = req

	if (method === 'POST') {
		const { email, password, username } = body

		if (email) {
			return createUser({ email, password, username })
				.then((result) => {
					return res.status(201).json(result)
				})
				.catch((err) => {
					const { message, status } = err
					return res.status(status).json({ message, token: null })
				})
		}

		if (username) {
			return loginUser(username, password)
				.then((response) => {
					return res.status(200).json(response)
				})
				.catch((err) => {
					const { status, ...result } = err
					return res.status(status).json(result)
				})
		}
	}

	if (method === 'PUT') {
		const token = req.headers[TOKEN_HEADER] as string

		if (!token) return res.status(403).json({ message: 'No token provided' })

		return updateUser(body, token)
			.then((result) => {
				return res.status(200).json(result)
			})
			.catch((err) => {
				const { message, status } = err
				return res.status(status).json({ message })
			})
	}
}
