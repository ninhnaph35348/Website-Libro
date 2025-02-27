
const Footer = ({ sidebarCollapsed }: any) => {
  return (
    <footer 
      className="fixed bottom-0 right-0 bg-white h-12 flex items-center px-4 shadow-sm z-20 border-t"
      style={{ width: `calc(100% - ${sidebarCollapsed ? '4rem' : '16rem'})` }}
    >
      <div className="text-sm text-gray-600">
        © Create by Hchaos.
      </div>
      <div className="ml-auto text-sm text-gray-500">
        Version 1.0.0
      </div>
    </footer>
  );
};

export default Footer;