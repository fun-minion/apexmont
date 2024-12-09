import './index.scss';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy">
            <div className="page-title">
                Privacy Policy
            </div>
            <div className="introduction">
                <p>
                    This Privacy Policy outlines how Apexmont Inc. ("Apexmont") collects, uses, and
                    safeguards your personal data when you interact with our website, services, or
                    communications. By accessing our website or using our services, you agree to the
                    terms outlined in this policy.
                    We understand the importance of privacy and are committed to protecting the
                    personal information you provide. This Privacy Policy applies to data collected via
                    our website, Apexmont.com (the "Site"), and any other applications or
                    communication channels linking to this policy.
                </p>
            </div>
            <div className="block">
                <div className="title">Information We Collect</div>
                <div className="content">
                    <p>We collect personal information in various ways, including:
                        <ul>
                            <li>Directly from you: Through forms, account creation, subscriptions, or
                                responses to requests for information.
                            </li>
                            <li>
                                Automatically: Via cookies and tracking technologies to gather usage
                                patterns, browsing behavior, and device information.
                            </li>
                        </ul>
                        Types of Information
                        <ul style={{ listStyleType: 'number' }}>
                            <li>
                                Personal Information: Name, email address, phone number, demographic
                                information, unique identifiers, and areas of interest.
                            </li>
                            <li>
                                Technical Information: IP address, browser type, operating system, and
                                browsing activity.
                            </li>
                            <li>
                                Usage Data: Interactions with the Site and engagement metrics.
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="block">
                <div className="title">How We Use Your Information</div>
                <div className="content">
                    <p>We process your personal data for purposes including:
                        <ul style={{ listStyle: 'number' }}>
                            <li>
                                Legitimate Business Interests:
                                <ul>
                                    <li>Informing you about updates, products, or services that may interest
                                        you.</li>
                                    <li>
                                        Personalizing your experience on our Site.
                                    </li>
                                    <li>
                                        Understanding user demographics and improving Site content and
                                        functionality.
                                    </li>
                                    <li>
                                        Measuring and enhancing marketing efforts across different
                                        platforms.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                With Your Consent: For specific purposes, such as sending marketing
                                communications. You may withdraw consent at any time.
                            </li>
                            <li>
                                Legal Compliance: To meet anti-fraud, anti-money laundering, tax, and other
                                regulatory requirements.
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="block">
                <div className="title">Sharing Your Information</div>
                <div className="content">
                    <p>We will not sell or rent your personal data. We may share your data with trusted
                        third parties, such as:
                        <ul>
                            <li>Subsidiaries or affiliates.</li>
                            <li>Advisors.</li>
                            <li>Service providers supporting IT, email distribution, or marketing operations.</li>
                            <li>Legal authorities or enforcement bodies when required by law.</li>
                        </ul>
                        Third parties are contractually obligated to process your information only as
                        authorized by Apexmont and within applicable legal parameters.
                    </p>
                </div>
            </div>
            <div className="block">
                <div className="title">Cookies And Tracking Technologies</div>
                <div className="content">
                    <p>We use cookies to enhance your experience on our Site. Cookies allow us to:
                        <ul>
                            <li>Track browsing behavior.</li>
                            <li>Personalize content.</li>
                            <li>Monitor and improve Site functionality.</li>
                        </ul>
                        You can manage or disable cookies in your browser settings. Please note that some
                        functionalities may be limited if cookies are disabled.
                    </p>
                </div>
            </div>
            <div className="block">
                <div className="title">Data Retention</div>
                <div className="content">
                    <p>We retain your personal data only for as long as necessary to fulfill its collection
                        purpose or as required by law. For example:
                        <ul>
                            <li>Marketing data is retained unless you opt out of communications.</li>
                            <li>Investment-related data may be retained longer to meet contractual or legal obligations</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="block">
                <div className="title">Security Measures</div>
                <div className="content">
                    <p>
                        Apexmont employs industry-standard security measures to protect your data.
                        While we strive to safeguard your information, no method of online transmission is
                        entirely secure. Apexmont is not liable for unauthorized access resulting from
                        factors beyond our control.
                    </p>
                </div>
            </div>
            <div className="block">
                <div className="title">Third-Party Links</div>
                <div className="content">
                    <p>
                        Our Site may contain links to external websites. Apexmont is not responsible for
                        the privacy practices or content of third-party sites. Please review their privacy
                        policies before submitting any personal data.
                    </p>
                </div>
            </div>
            <div className="block">
                <div className="title">INTERNATIONAL TRANSFERS</div>
                <div className="content">
                    <p>
                        Currently, Apexmont does not transfer personal data outside of Canada. Should
                        such transfers occur in the future, we will ensure compliance with applicable data
                        protection laws.
                    </p>
                </div>
            </div>
            <div className="block">
                <div className="title">YOUR RIGHTS</div>
                <div className="content">
                    <p>
                        Under applicable privacy laws, including GDPR and CCPA, you may have rights
                        such as:
                        <ul>
                            <li>Accessing your personal data.</li>
                            <li>Correcting or erasing your data.</li>
                            <li>Restricing or objecting to data processing.</li>
                            <li>Requesting data portability.</li>
                            <li>Withdrawing consent for processing.</li>
                        </ul>
                        To exercise your rights or request a copy of your personal data, contact us at
                        info@apexmont.com. Verification of identity will be required before processing
                        your request.
                    </p>
                </div>
            </div>
            <div className="block">
                <div className="title">POLICY UPDATES</div>
                <div className="content">
                    <p>
                        Apexmont reserves the right to update this Privacy Policy as necessary. Material
                        changes will be communicated and reflected on this page.
                    </p>
                </div>
            </div>
            <div className="block">
                <div className="title">Contact Information</div>
                <div className="content">
                    <p>
                        Apexmont Inc.<br />
                        1741 Lower Water Street, Suite 600<br />
                        Halifax, NS B3J 0J2, Canada<br />
                        Email: info@apexmont.com<br />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy;