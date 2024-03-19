export interface UserType {
    email: string | null;
    uid: string | null;
    photoURL: string | null;
    name: string | null;
    birthday: Date | null;
}

export interface UserData {
    lists: [] | null;
    birthday: string | null;
}