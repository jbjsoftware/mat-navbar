export interface NavbarItem {
    label?: string;
    icon?: string;
    path?: string;
    items?: SecondaryNavbarItem[];
}

export interface SecondaryNavbarItem {
    label?: string;
    icon?: string;
    path?: string;
    items?: TertiaryNavbarItem[];
}

export interface TertiaryNavbarItem {
    label?: string;
    path?: string;
}
