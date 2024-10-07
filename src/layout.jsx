import Header from './Components/header';

export default function Layout({ children }) {
    return (
        <>
            
            <Header>
                {children} 
            </Header>

        </>
    );
}
