export interface Item {
    productId: number,
    productName: string,
    brandName: string,
    productImageUrl: string,
    productDescription: string, 
    productPrice: number, 
}

export function emptyItem(): Item{
    return {
        productId: 0,
        productName: "",
        brandName: "",
        productImageUrl: "",
        productDescription: "", 
        productPrice: 0, 
    }
}