const faker = require("@faker-js/faker");
const fs = require("fs");
//locale
faker.locale = "vi";

// console.log(faker.name.firstName());
// console.log(faker.internet.email());

// console.log(faker.commerce.product());
// console.log(faker.commerce.price());

// console.log(faker.random.image());
// console.log(faker.datatype.uuid());

function randomCategoriesList(numb) {
    if (numb <= 0) return [];
    const listCategories = [];
    Array.from(new Array(numb)).forEach(item => {
        const category = {
            id: faker.datatype.uuid(),
            name: faker.commerce.department(),
            createdAt: Date.now(),
            updatedAt: Date.now(),
        };

        listCategories.push(category);
    });

    return listCategories;
}

const listCategories = randomCategoriesList(4);
(() => {
    // prepare data
    const db = {
        categories: listCategories,
        product: [],
        info: {
            createdBy: "VuLong",
        },
    };
    // write to db.json
    fs.writeFile("./db.json", JSON.stringify(db), () => {
        console.log("Write Successfully =))");
    });
})();
