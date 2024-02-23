const Footer = () => {
  const owner = "Čiukčių dėdė";
  const metai = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {metai} owned by {owner}</p>
    </footer>
  );
}
 
export default Footer;