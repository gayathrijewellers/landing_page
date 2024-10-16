import { Products } from "@/lib/types";

const DEVYANI_PRODUCTS_COUNT: number = 14;
const MAHARANI_PRODUCTS_COUNT: number = 15;
const MANGALYA_PRODUCTS_COUNT: number = 7;
const NITYA_PRODUCTS_COUNT: number = 3;
const RATNAM_PRODUCTS_COUNT: number = 10;
const SINDHOORA_PRODUCTS_COUNT: number = 27;
const SWARNAM_PRODUCTS_COUNT: number = 9;
const VISMAYA_PRODUCTS_COUNT: number = 10;

export const DEVYANI = (): Products[] => {
    let result: Products[] = [];
    for (let i = 1; i <= DEVYANI_PRODUCTS_COUNT; i++) {
        result.push({ id: i, name: '', image: `/products/Devyani/${i}.webp` });
    }
    return result;
};

export const MAHARANI = (): Products[] => {
    let result: Products[] = [];
    for (let i = 1; i <= MAHARANI_PRODUCTS_COUNT; i++) {
        result.push({ id: i, name: '', image: `/products/Maharani/${i}.webp` });
    }
    return result;
}

export const MANGALYA = (): Products[] => {
    let result: Products[] = [];
    for (let i = 1; i <= MANGALYA_PRODUCTS_COUNT; i++) {
        result.push({ id: i, name: '', image: `/products/Mangalya/${i}.webp` });
    }
    return result;
}

export const NITYA = (): Products[] => {
    let result: Products[] = [];
    for (let i = 1; i <= NITYA_PRODUCTS_COUNT; i++) {
        result.push({ id: i, name: '', image: `/products/Nitya/${i}.webp` });
    }
    return result;
}

export const RATNAM = (): Products[] => {
    let result: Products[] = [];
    for (let i = 1; i <= RATNAM_PRODUCTS_COUNT; i++) {
        result.push({ id: i, name: '', image: `/products/Ratnam/${i}.webp` });
    }
    return result;
}

export const SINDHOORA = (): Products[] => {
    let result: Products[] = [];
    for (let i = 1; i <= SINDHOORA_PRODUCTS_COUNT; i++) {
        result.push({ id: i, name: '', image: `/products/Sindhoora/${i}.webp` });
    }
    return result;
}

export const SWARNAM = (): Products[] => {
    let result: Products[] = [];
    for (let i = 1; i <= SWARNAM_PRODUCTS_COUNT; i++) {
        result.push({ id: i, name: '', image: `/products/Swarnam/${i}.webp` });
    }
    return result;
}

export const VISMAYA = (): Products[] => {
    let result: Products[] = [];
    for (let i = 1; i <= VISMAYA_PRODUCTS_COUNT; i++) {
        result.push({ id: i, name: '', image: `/products/Vismaya/${i}.webp` });
    }
    return result;
}

export const PRODUCTS_MAP = {
    devyani: DEVYANI,
    maharani: MAHARANI,
    mangalya: MANGALYA,
    nitya: NITYA,
    ratnam: RATNAM,
    sindhoora: SINDHOORA,
    swarnam: SWARNAM,
    vismaya: VISMAYA,
};

function getRandomProductFromCollection(collection: Products[]): Products {
    const randomIndex = Math.floor(Math.random() * collection.length);
    return collection[randomIndex];
}

export const RANDOM_PRODUCTS = Array.from({ length: 9 }, () => {
    const collections = Object.values(PRODUCTS_MAP).map((fn) => fn());
    const randomCollection =
        collections[Math.floor(Math.random() * collections.length)];
    return getRandomProductFromCollection(randomCollection);
});