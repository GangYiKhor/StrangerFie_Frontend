import axios, { AxiosResponse } from "axios";

export function usePost<Body = any, Res = any>(url: string) {
	return async (body: Body) => {
		let { data, status } = await axios.post<any, AxiosResponse<Res, any>, Body>(
			process.env.REACT_APP_BACKEND_URL + url,
			body
		);
		return { data, status };
	};
}
