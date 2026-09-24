export default function SectionOne(){
    return(
        <section id="waterSection">
            <div className="water-section">

                <img
                    src="https://images.unsplash.com/photo-1566755090331-7aab2b544831?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Water flowing over rocks"
                    className="cover-img"
                />

                <div className="water-content">
                    <video
                        className="water-window"
                        src="/waterfall.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                   
                </div>
                <div className="water-text">
                    <p>
                        Water shapes the Earth,
                        carries life,
                        and never truly stands still.
                    </p>
                </div>
            </div>
        </section>
    )
}