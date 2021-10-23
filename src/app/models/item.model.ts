export interface Item {
    productId: string,
    productName: string,
    brandName: string,
    productImageUrl: string,
    productDescription: string, 
    productPrice: number, 
}

export function emptyItem(): Item{
    return {
        productId: "",
        productName: "",
        brandName: "",
        productImageUrl: "",
        productDescription: "", 
        productPrice: 0, 
    }
}