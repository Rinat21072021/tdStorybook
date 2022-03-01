import axios from "axios";

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.1/',
	headers: {'API-KEY': 'ff93b3ea-e4dd-4fd8-99af-ef77ec15da18'},
	withCredentials: true,
});

export const TodoApi = {
	getTodo() {
		return instance.get<Array<TodoType>>(`todo-lists`)
	},
	createTodo(title: string) {
		return instance.post<BaseResponseType<{ item: TodoType }>>(`todo-lists`, {title})
	},
	deleteTodo(todolistId: string) {
		return instance.delete<BaseResponseType>(`todo-lists/${todolistId}`)
	},
	updateTitleTodo(todolistId: string, title: string) {
		return instance.put<BaseResponseType>(`todo-lists/${todolistId}`, {title})
	}
}
type TodoType = {
	"id": string,
	"title": string,
	"addedDate": string,
	"order": number
}
type BaseResponseType<T = {}> = {
	resultCode: number
	messages: Array<string>,
	data: T,
	fieldsErrors: Array<string>
}