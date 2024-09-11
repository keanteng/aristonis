export function formatDate(date: Date ) {
    // format to 'YYYY-MM-DD'
    return date.toISOString().split('T')[0];
}