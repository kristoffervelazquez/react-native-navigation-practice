
// Generated by https://quicktype.io

export interface Personas {
    data: Persona[];
    page: number;
    per_page: number;
    support: Support;
    total: number;
    total_pages: number;
}

export interface Persona {
    avatar: string;
    email: string;
    first_name: string;
    id: number;
    last_name: string;
}

export interface Support {
    text: string;
    url: string;
}