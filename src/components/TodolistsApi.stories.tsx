import React, {useEffect, useState} from 'react'

import {TodoApi} from "../api/TodoApi";

export default {
	title: 'API'
}

export const GetTodolists = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		TodoApi.getTodo().then((resp) => {
			setState(resp.data)
		})
	}, [])

	return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		const title = '111'
		TodoApi.createTodo(title).then(resp => setState(resp.data))
	}, [])

	return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		const todolistId = 'ef8d3451-2858-4a81-8fd5-5a31b5a003b4'
		TodoApi.deleteTodo(todolistId).then(resp=>setState(resp.data))
	}, [])

	return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		const todolistId= '36ae9788-cba0-4f77-8ce6-3f0b2538768c'
		const title = 'ReactApi'
		TodoApi.updateTitleTodo(todolistId,title).then(resp=>setState(resp.data))
	}, [])

	return <div> {JSON.stringify(state)}</div>
}
