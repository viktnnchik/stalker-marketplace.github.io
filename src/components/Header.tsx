import { ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isProductPage = location.pathname.startsWith('/product/');
  const isAdminPage = location.pathname === '/admin';

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex w-full justify-between items-center">
          <div className="flex items-center gap-4">
            {(isProductPage || isAdminPage) && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/')}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Market
              </Button>
            )}
            <h1 className="text-xl font-bold text-primary">STALKER MARKET</h1>
          </div>
          {!isAdminPage && (
            <Button 
              onClick={() => navigate('/admin')} 
              className="flex items-center gap-2"
            >
              Add Product
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;