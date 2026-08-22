export interface Variant {
    id: string;
    name: string;
    price?: number;
    hex?: string;
    image?: string;
    compareAtPrice?: number;
    isSelected: boolean;
    onClick: () => void;
}

