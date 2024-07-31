export class author{

    constructor( protected name: string, protected birthDate: Date, public books: string[]){ };

    displayAuthorInfo(this: author){
        console.log(`The author name is ${this.name} born on ${this.birthDate.toDateString()}`)
    }
    addBookWrittenByAuthor(bookName: string){
        if (bookName.trim().length === 0) {
            throw new Error("Book name cannot be empty");
        }
        this.books.push(bookName)
    }
    get booksWritten(){
        
        return this.books
    }

    get nameOfAuthor(){
        return this.name
    }

    set nameOfAuthor(newName: string) {
        if (newName.trim().length === 0) {
            throw new Error("Name cannot be empty");
        }
        this.name = newName;
    }

    get birthdate(){
        return this.birthDate
    }

    set birthdate(newBirthDate: Date) {
        if (!(newBirthDate instanceof Date)) {
            throw new Error("Invalid date");
        }
        this.birthDate = newBirthDate;
    }

    removeBook( bookName: string){
        if(this.books.length<1){
            throw new Error("Cannot perform this operation, no books found")
        }
        const initialLength=this.books.length
        this.books=this.books.filter(ele => ele !== bookName)

        if(this.books.length === initialLength){
            throw new Error(`Book named "${bookName}" not found.`)
        }
    }

    displayBooksWrittenByAuthor(){
        if(this.books.length <1){
            throw new Error(`No books are written by ${this.name}`)
        }else{
            console.log(`Books written by ${this.name} are:`)
            this.books.forEach((book, index) => {
                console.log(`${index + 1}.) ${book}`);
            });
        }
    }
}