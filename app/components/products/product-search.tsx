import {
    MagnifyingGlassIcon,
   } from '@radix-ui/react-icons'


export default function ProductSearch() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between text-sm">
            <select id="sort" className="border rounded-lg px-2 py-1 mx-2 my-2">
                <option value="new">New</option>
                <option value="highestPrice">Highest Price</option>
                <option value="ratingAscending">Rating Ascending</option>
            </select>
            {/* Add a simple search bar */}
            <div className="relative mx-2 my-2">
                <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded-lg px-2 py-1 pl-8"
                />
                <MagnifyingGlassIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
        </div>
    )
}