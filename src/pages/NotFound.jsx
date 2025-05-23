import Lottie from "lottie-react";
import NotFoundAnimation from "@/404assets/NotFoundAnimation.json";

export const NotFound = () => {
    return (
        <div className="fixed flex items-center justify-center overflow-hidden">
            <Lottie animationData={NotFoundAnimation} />
        </div>
    );
};