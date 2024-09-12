import {
    BuildingStorefrontIcon,
    ShoppingCartIcon,
    ClockIcon
} from '@heroicons/react/24/outline'
import RevenueChart from './charts/revenue-chart'
import GoodsDistributionChart from './charts/revenue-pie'

export default function HomeAnalysis() {
    return (
        <main className='w-full'>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
                <div className="flex flex-col lg:flex-row md:flex-row border-2 border-solid p-2 rounded-lg shadow-sm">
                    <div className="flex flex-col justify-center items-center w-full gap-0.5">
                        <BuildingStorefrontIcon className="h-6 w-6" />
                        <p className="text-2xl font-medium">
                            23,456
                        </p>
                        <p className="text-sm">
                            Today's Sales (RM)
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row md:flex-row border-2 border-solid p-2 rounded-lg shadow-sm">
                    <div className="flex flex-col justify-center items-center w-full gap-0.5">
                        <ShoppingCartIcon className="h-6 w-6" />
                        <p className="text-2xl font-medium">
                        236
                        </p>
                        <p className="text-sm">
                            Total Orders Processed
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row md:flex-row border-2 border-solid p-2 rounded-lg shadow-sm">
                    <div className="flex flex-col justify-center items-center w-full gap-0.5">
                        <ClockIcon className="h-6 w-6" />
                        <p className="text-2xl font-medium">
                            34 Minutes
                        </p>
                        <p className="text-sm text-center">
                            Time Between Purchase
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div>
                    <RevenueChart />
                </div>
                <div>
                    <GoodsDistributionChart />
                </div>
            </div>
        </main>
    )
}