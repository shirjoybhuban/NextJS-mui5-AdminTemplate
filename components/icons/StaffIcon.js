const { SvgIcon } = require('@mui/material');

const StaffIcon = (props) => {
  return (
    <SvgIcon
      {...props}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.0003 2.5L1.66699 10H4.16699V16.6667H9.16699V11.6667H10.8337V16.6667H15.8337V10H18.3337L10.0003 2.5ZM14.167 15H12.5003V10H7.50033V15H5.83366V8.49167L10.0003 4.74167L14.167 8.49167V15Z"
      />
    </SvgIcon>
  );
};

export default StaffIcon;
