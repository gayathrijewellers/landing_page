export type Announcements = {
    type: string,
    src: string,
    content: {
        title: string,
        description: string
        button?: boolean
        button_content?: string
        link?: string,
    }
}

export type Collection_Names = {
    id: string,
    counter: string,
    name: string,
    image: string
}

export type Saving_Scheme = {
    name: string;
    image: string;
    bg: string;
    description: string;
};

export type Products = {
    id: number;
    name: string;
    image: string
}