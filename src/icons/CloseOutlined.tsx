import React from "react";
import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const CloseSvg = () => (
  <svg viewBox="0 0 1024 1024" width="16" height="16">
    <path
      d="M937.281581 799.254764 937.281581 799.254764 937.281581 799.254764 937.281581 799.254764zM1002.320395
             510.91602c0-270.99506-220.409315-491.404375-491.404375-491.404375-270.99506 0-491.404375 220.409315-491.404375
              491.404375 0 270.99506 220.409315 491.404375 491.404375 491.404375C781.91108 1002.320395 1002.320395 781.91108
               1002.320395 510.91602M510.91602 931.500353c-231.971771 0-421.306987-188.612562-421.306987-421.306987 0-231.971771
                188.612562-421.306987 421.306987-421.306987 231.971771 0 421.306987 188.612562 421.306987 421.306987C931.500353
                 742.887791 742.887791 931.500353 510.91602 931.500353M712.536344 664.841214l-151.757234-152.479887
                 151.757234-150.311927c13.730416-13.730416 13.730416-36.132675 0-49.863091-13.730416-13.730416-36.132675-13.730416-49.863091
                  0L510.91602 462.498236 360.604093 312.186309c-13.730416-13.730416-36.132675-13.730416-49.863091
                   0-13.730416 13.730416-13.730416 36.132675 0 49.863091l149.589273 150.311927L310.018349 661.227946c-13.730416
                    13.730416-13.730416 36.132675 0 49.863091 7.226535 7.226535 15.898377 10.117149 24.570219 10.117149
                    8.671842 0 18.066337-3.613267 24.570219-10.117149l151.03458-149.589273 152.479887 152.479887c6.503881
                    6.503881 15.898377 10.117149 24.570219 10.117149 8.671842 0 18.066337-3.613267 24.570219-10.117149C725.544107
                    700.973888 725.544107 678.57163 712.536344 664.841214"
    />
  </svg>
);

const CloseOutlined = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={CloseSvg} {...props} />
);

export default CloseOutlined;