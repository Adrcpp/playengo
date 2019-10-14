export interface User {
    id: string,
    username: string,
    last_name:string,
    first_name: string,
    profile_images: {
        small: string
    }
}