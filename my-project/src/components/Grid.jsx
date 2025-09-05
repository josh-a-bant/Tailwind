const Grid = () => {
  return (
    <div className="max-w-5xl mx-auto flex justify-center items-center h-screen pt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Card className="bg-violet-300 md:col-span-1 flex flex-col justify-center items-center">
          <CardHeader>Card-1</CardHeader>
          <CardBody>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            adipisci molestias perferendis? Perspiciatis tempore reprehenderit
            minima, placeat nihil accusamus vel.
          </CardBody>
          <CardFooter>Lorem ipsum dolor sit amet.</CardFooter>
        </Card>

        <Card className="bg-pink-300 md:col-span-1 flex flex-col justify-center items-center">
          <CardHeader>Card-2</CardHeader>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            exercitationem necessitatibus ut voluptatum ipsam nulla temporibus
            sint, praesentium voluptate corrupti!
          </CardBody>
          <CardFooter>Lorem ipsum dolor sit amet.</CardFooter>
        </Card>

        <Card className="bg-purple-300 md:col-span-1 flex flex-col justify-center items-center">
          <CardHeader>Card-3</CardHeader>
          <CardBody>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            doloribus voluptate officiis qui sint rem, nobis, quos ullam nemo
            eveniet excepturi, ad odio nostrum. Earum ad labore molestiae est
            nesciunt.
          </CardBody>
          <CardFooter>Lorem ipsum dolor sit amet.</CardFooter>
        </Card>

        <Card className="bg-green-300 md:col-span-1 flex flex-col justify-center items-center">
          <CardHeader>Card-4</CardHeader>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            natus itaque provident laboriosam omnis quo error voluptatibus
            obcaecati similique hic recusandae laborum dolorum consequuntur
            cumque corrupti consectetur! Repellat, accusantium corrupti!
          </CardBody>
          <CardFooter>Lorem ipsum dolor sit amet.</CardFooter>
        </Card>
      </div>
    </div>
  );
};

const Card = ({ children, className }) => {
  return (
    <div className={`rounded-lg shadow-md p-4 ${className}`}>{children}</div>
  );
};

const CardHeader = ({ children, className }) => {
  return <h1 className={`font-bold text-2xl mb-2 ${className}`}>{children}</h1>;
};

const CardBody = ({ children, className }) => {
  return (
    <div className={`text-lg text-neutral-700 text-center ${className}`}>
      {children}
    </div>
  );
};

const CardFooter = ({ children, className }) => {
  return (
    <div className={`mt-3 border-t pt-2 text-md text-neutral-500 ${className}`}>
      {children}
    </div>
  );
};

export default Grid;
