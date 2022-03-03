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
		const todolistId = '70173eba-ad4d-4ef3-90df-86e2db815a6e'
		TodoApi.deleteTodo(todolistId).then(resp => setState(resp.data))
	}, [])

	return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		const todolistId = '36ae9788-cba0-4f77-8ce6-3f0b2538768c'
		const title = 'ReactApi'
		TodoApi.updateTitleTodo(todolistId, title).then(resp => setState(resp.data))
	}, [])

	return <div> {JSON.stringify(state)}</div>
}
export const GetTask = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		const todolistId = '36ae9788-cba0-4f77-8ce6-3f0b2538768c'
		TodoApi.getTaskResponse(todolistId)
			.then((resp) => {
				setState(resp.data.items)
			})
	}, [])

	return <div> {JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
	const [state, setState] = useState<any>(null)
	useEffect(()=>{
		const todolistId='36ae9788-cba0-4f77-8ce6-3f0b2538768c'
		const taskId=''
		TodoApi.deleteTaskResponse(todolistId,taskId)
			.then((resp)=>{
				setState(resp.data)
			})

	},[])
	return <div>{JSON.stringify(state)}</div>
}
export const CreateTask = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		const todolistId = '36ae9788-cba0-4f77-8ce6-3f0b2538768c'
		const title = 'title'
		TodoApi.createTaskResponse(todolistId,title).then(resp => setState(resp.data))
	}, [])

	return <div> {JSON.stringify(state)}</div>
}
