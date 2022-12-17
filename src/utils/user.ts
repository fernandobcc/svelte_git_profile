import type IRepo from "../interfaces/IReops";
import type IUser from "../interfaces/IUser";

export default function buildUser(userData: any, repoData: any): IUser {
    return {
        name: userData.name,
        login: userData.login,
        avatar_url: userData.avatar_url,
        perfil_url: userData.html_url,
        public_repos: userData.public_repos,
        followers: userData.followers,
        recent_repos: repoData.map((repo: any) => {
            return {
                name: repo.name,
                url: repo.url,
            } as IRepo
        }
    }
}
