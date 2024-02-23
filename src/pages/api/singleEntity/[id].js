import jobsData from '@/data/records.json'

export default function handler(req, res) {
  const { id } = req.query; 

  const job = jobsData.find(job => job.JobID === id);

  if (job) {
    res.status(200).json(job); 
  } else {
    res.status(404).json({ message: 'data not found' });
  }
}