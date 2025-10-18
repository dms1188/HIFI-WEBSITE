export interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export interface Testimonial {
    id: number;
    name: string;
    feedback: string;
    position: string;
}

export interface NavigationLink {
    label: string;
    path: string;
}