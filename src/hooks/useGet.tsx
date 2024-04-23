import axios, { AxiosResponse } from "axios";

export function useGet<Res = any>(url: string) {
	return async () => {
		let { data, status } = await axios.get<any, AxiosResponse<Res, any>>(
			process.env.REACT_APP_BACKEND_URL + url
		);
		return { data, status };
	};
}
