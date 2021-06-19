class BooksController < ApplicationController
    before_action :set_library
    before_action :set_book, only: [:show, :destroy, :update, :edit]

    def index
        render component: 'Books', props: {library: @library, books: @library.books}
    end

    def show
        render component: 'Book', props: {library: @library, book: @book}
    end

    def create
        book = @library.books.new(book_params)
        if book.save
            redirect_to library_books_path(@library.id)
        else
        end
    end

    def new
        render component: 'BookNew', props: {library: @library}
    end

    def edit
        render component: 'BookEdit', props: {library: @library, book: @book}
    end

    def update
        if @book.update(book_params)
            redirect_to library_books_path(@library.id)
        else
        end
    end

    def destroy
        @book.destroy
        redirect_to library_books_path(@library.id)
    end

    private

    def book_params
        params.require(:book).permit(:name, :author)
    end

    def set_library
        @library = Library.find(params[:library_id])
    end

    def set_book
        @book = @library.books.find(params[:id])
    end
end
