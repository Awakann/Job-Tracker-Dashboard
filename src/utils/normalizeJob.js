

export const normalizeApiJob = (job) => ({
    id: job.id,
    company: job.company_name,
    position: job.title,
    status: "Not Applied",
    source: "API",
    url: job.url,
})