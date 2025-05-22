import Lottie from "lottie-react";
import NotFoundAnimation from "@/404assets/NotFoundAnimation.json";

export const NotFound = () => {
    return (
        <div>
            <Lottie animationData={NotFoundAnimation} />
        </div>
    );
};