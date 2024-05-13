import { ReactNode } from "react";

type Tchildren = {
    children:ReactNode
}

const Container = ({children}:Tchildren) => {
    return (
        <div className="w-full max-w-screen-xl mx-auto">
            {children}
        </div>
    );
};

export default Container;