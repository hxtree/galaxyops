PROFILE="DeveloperSandbox"
unset AWS_PROFILE
export AWS_PROFILE=$PROFILE
if aws sts get-caller-identity; then
    echo "The user is already authenticated using profile $PROFILE"
elif aws sso login; then
    echo "AWS SSO Login"
else
    unset AWS_PROFILE
    aws-configure-sso-profile --profile $PROFILE
    eval $(aws-export-credentials --env-export)
fi
