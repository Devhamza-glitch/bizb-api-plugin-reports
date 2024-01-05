
export default async function currentSellerSoldProducts(parent, args, context, info) {
    // console.log("currentSellerSoldProducts query context", context);
    let { user, collections } = context;
    let { Catalog, SimpleInventory } = collections;
    // console.log("account", account);
    // console.log("context.user", user);
    let { _id } = user;
    let query = {
        "product.variants.uploadedBy.userId": _id,
        "product.isSoldOut": true,
    };
    // console.log("query", query);
    let currentSellerSoldProductsCount = await Catalog.countDocuments(query);
    // let currentSellerSoldProductsDataCount = await Catalog.find(query).toArray();
    // // let SimpleInventoryCount = await SimpleInventory.count(query);
    // console.log("currentSellerSoldProductsDataCount", currentSellerSoldProductsDataCount);
    console.log("Catalog Data:- ", currentSellerSoldProductsCount);
    return currentSellerSoldProductsCount;
}
