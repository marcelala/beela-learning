export default function ResourceSelector(setter: Function) {
  return (
    <div className={"selector"}>
      <button onClick={(event) => setter("links")}>Links</button>
      <button onClick={(event) => setter("files")}>Files</button>
      <button onClick={(event) => setter("videos")}>Videos</button>
    </div>
  );
}
