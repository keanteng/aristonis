
interface BadgeProps {
    text: string;
    type: 'status' | 'type';
}

const OrderBadge: React.FC<BadgeProps> = ({ text, type }) => {
    const baseClasses = 'px-2 py-1 rounded-md text-xs font-semibold';
    const statusClasses: { [key: string]: string } = {
        pending: 'bg-yellow-100 text-yellow-800',
        fulfilled: 'bg-green-100 text-green-800',
        declined: 'bg-red-100 text-red-800',
    };
    const typeClasses: { [key: string]: string } = {
        sale: 'bg-blue-100 text-blue-800',
        store: 'bg-purple-100 text-purple-800',
    };

    const classes = type === 'status' ? statusClasses[text] : typeClasses[text];

    return <span className={`${baseClasses} ${classes}`}>{text}</span>;
};

export default OrderBadge;