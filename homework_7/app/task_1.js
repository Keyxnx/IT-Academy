class PaginationHelper {

    constructor(items, itemsPerPage) {

        this.items = items;
        this.itemsPerPage = itemsPerPage;
        this.productPages = {};
        this.getProductPages();
    }

    getProductPages() {
        let indexesOfItems = [...this.items.keys()],
            amountOfPages = ~~(this.items.length / this.itemsPerPage);
        
            amountOfPages += this.items.length - (amountOfPages * this.itemsPerPage) > 0 ? 1 : 0;

        for (let i = 0; i < amountOfPages; i++) {
            this.productPages[i] = indexesOfItems.splice(0, this.itemsPerPage);
        }
        if (this.itemsPerPage === 0) this.productPages = {};
    }
    
    pageCount() {
        return Object.keys(this.productPages).length;
    }

    itemCount() {
        return this.items.length;
    }

    pageItemCount(currentItemsOnPage) {
        return this.productPages[currentItemsOnPage] ? this.productPages[currentItemsOnPage].length : -1;
    }

    pageIndex(indexOfItem) {
        for (let i in this.productPages) {
            if (this.productPages[i].includes(indexOfItem)) {
                return  i;
            }
        }
        return -1;
    }
}

const page = new PaginationHelper(['a','b','c','d','e','f'], 4);

console.log(page.pageCount())
console.log(page.itemCount())
console.log(page.pageItemCount(0))
console.log(page.pageItemCount(1))
console.log(page.pageItemCount(2))
console.log(page.pageIndex(5))
console.log(page.pageIndex(2))
console.log(page.pageIndex(20))
console.log(page.pageIndex(-20))
