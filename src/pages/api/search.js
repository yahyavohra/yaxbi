
import jobsData from '@/data/records.json'

export default function handler(req, res) {
const { title, category, location } = req.query;
let searchResult;
if (!title && !category && !location) {
    searchResult = jobsData;
}else{
    const locations = location  ?  Array.isArray(location) ? location : [location] : [];
    const categories = category ?  Array.isArray(category) ? category : [category] : [];
    searchResult = jobsData.filter(job =>
        (!title || job.jobTitle.toLowerCase().includes(title.toLowerCase())) &&
        (!categories.length || (job.category &&  categories.some(cat => cat.toLowerCase() === job.category.toLowerCase()))) &&
        (!locations.length  || (job.location && locations.some(loc => loc.toLowerCase() === job.location.toLowerCase())))
    );
}
res.status(200).json(searchResult);
}