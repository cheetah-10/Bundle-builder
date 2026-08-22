import type { Variant } from "./variant";

export interface Product {
    id: string;
    stepId: string;
    title: string;
    category: 'Cameras' | 'Plan' | 'Sensors' | 'Accessories';
    image: string;
    description: string;
    learnMoreUrl?: string;
    price: number;
    compareAtPrice?: number;
    discount?: number;
    variants?: Variant[];
}
