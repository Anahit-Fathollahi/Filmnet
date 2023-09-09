import "./index.scss";

function LoadingBox() {
    const array = new Array(9).fill(1);
    return (
        <span>
            <div className="loading-box">
                {array.map((item: number, idx) => (
                    <div className="container_loading" key={`loading-${idx}`}>
                        <div className="skeleton-box"></div>
                        <div className="skeleton-box-text"></div>
                    </div>
                ))}
            </div>
        </span>
    );
}

export default LoadingBox;
