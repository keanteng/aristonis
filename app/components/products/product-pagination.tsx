interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  
  const ProductPagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    const handlePrevious = () => {
      if (currentPage > 1) {
        onPageChange(currentPage - 1);
      }
    };
  
    const handleNext = () => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    };
  
    return (
      <div className="flex flex-row gap-4 items-center text-base">
        <button onClick={handlePrevious} disabled={currentPage === 1} className="flex bg-neutral-300 rounded-md p-1 px-2 hover:bg-neutral-400 shadow-md text-black">
          Previous
        </button>
        <div>
          Page {currentPage} of {totalPages}
        </div>
        <button onClick={handleNext} disabled={currentPage === totalPages} className="flex bg-neutral-300 rounded-md p-1 px-2 hover:bg-neutral-400 shadow-md text-black">
          Next
        </button>
      </div>
    );
  };
  
  export default ProductPagination;