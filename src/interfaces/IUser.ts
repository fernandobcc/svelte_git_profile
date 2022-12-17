import type IRepo from "./IReops";

export default interface IUser {
    name: string;
    login: string;
    avatar_url: string;
    perfil_url: string;
    public_repos: number;
    followers: number;
    recent_repos: Array<IRepo>;
}
