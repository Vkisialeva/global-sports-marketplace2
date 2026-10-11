
import { useEffect, useState } from "react";

export default function Jobs() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchJobs() {
            try {
                const response = await fetch(
                    "http://localhost:5001/api/jobs"
                );

                if (!response.ok) {
                    throw new Error(
                        `Server error: ${response.status}`
                    );
                }

                const data = await response.json();
                setJobs(data);
            } catch (err) {
                console.error("Error loading jobs:", err);
                setError(
                    "Unable to load jobs. Check that the backend is running."
                );
            } finally {
                setLoading(false);
            }
        }

        fetchJobs();
    }, []);

    if (loading) {
        return <p>Loading sports jobs...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <main
            style={{
                maxWidth: "1100px",
                margin: "0 auto",
                padding: "40px 20px",
            }}
        >
            <h1>Sports Job Opportunities</h1>

            <p>
                Explore sports careers around the world.
            </p>

            {jobs.length === 0 ? (
                <p>No jobs available yet.</p>
            ) : (
                <div>
                    {jobs.map((job) => (
                        <article
                            key={job.id}
                            style={{
                                background: "white",
                                border: "1px solid #ddd",
                                borderRadius: "10px",
                                padding: "24px",
                                marginTop: "20px",
                                color: "#14263a",
                            }}
                        >
                            <h2>{job.title}</h2>

                            <p>{job.description}</p>

                            <p>
                                <strong>Location:</strong>{" "}
                                {job.location}
                            </p>

                            <p>
                                <strong>Sport:</strong>{" "}
                                {job.sport}
                            </p>
                        </article>
                    ))}
                </div>
            )}
        </main>
    );
}
