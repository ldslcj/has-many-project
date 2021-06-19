class LibrariesController < ApplicationController
    before_action :set_library, only: [:show, :update, :edit, :destroy]

    def index
        @libraries = Library.all
        render component: "Libraries", props: {libraries: @libraries}
    end

    def show
        render component: "Library", props: {library: @library}
    end



    def create
        @library = Library.new(library_params)
        if(@library.save)
            redirect_to root_path
        else
        end
    end

    def edit
        render component: "LibraryEdit", props:{library: @library}
    end

    def update
        if @library.update(library_params)
            redirect_to root_path
        else
        end
    end

    def new
        render component: "LibraryNew"
    end


    def destroy
        @library.destroy
        redirect_to root_path
    end

    private

    def set_library
        @library = Library.find(params[:id])
    end

    def library_params
        params.require(:library).permit(:name, :location)
    end


end
